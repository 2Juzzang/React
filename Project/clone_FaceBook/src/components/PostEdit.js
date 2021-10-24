import React from 'react';
import './Style/PostWrite.css';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Grid } from '../elements/index';

import { history } from '../redux/configStore';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import FilterIcon from '@mui/icons-material/Filter';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import RoomIcon from '@mui/icons-material/Room';
import MicIcon from '@mui/icons-material/Mic';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { updatePostToAxios } from '../redux/modules/posts';

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  borderRadius: '8px',
  bgcolor: '#FFF',
  border: '0px solid #000',
  boxShadow: 24,
  p: '16px',
  outline: 0,
};

const selectBoxOption = {
  width: '100%',
  margin: '10px 0px',
};

const PostEdit = ({ show, onHide, currentPost }) => {
  const dispatch = useDispatch();
  const [updateContent, setUpdateContent] = React.useState(currentPost.content);
  const [showImageUpLoder, setShowImageUpLoder] = React.useState(
    currentPost.image ? true : false,
  );
  const [updateImageUrl, setUpdateImageUrl] = React.useState(currentPost.image);
  const postId = currentPost.postId;
  const imageRef = React.useRef('');

  const handleImageUpLoader = (e) => {
    setShowImageUpLoder(!showImageUpLoder);
  };

  const readerUrl = () => {
    if (!imageRef.current.files[0]) {
      return;
    }
    const reader = new FileReader();
    const file = imageRef.current.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setUpdateImageUrl(reader.result);
    };
  };

  const updatePost = async () => {
    const image = imageRef.current.files[0] ? imageRef.current.files[0] : null;

    const formData = new FormData();
    formData.append('content', updateContent);
    imageRef.current.files[0] && formData.append('image', image);

    await dispatch(updatePostToAxios(postId, formData));
    history.push('/');
  };

  return (
    <Grid>
      <Modal
        open={show}
        onClose={onHide}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <Grid>
            <Typography
              id="modal-modal-title"
              fontSize="20px"
              fontWeight="bold"
              component="h2"
              textAlign="center"
              paddingBottom="10px"
            >
              게시물 만들기
            </Typography>
            <hr width="100%" />
            <div className="write__top">
              <Avatar className="post__avatar" />
              <div className="write__topInfo">
                <h3>{currentPost.userName}</h3>
                <p>친구만</p>
              </div>
            </div>
            <div className="write__middle">
              <form>
                <input
                  type="text"
                  value={updateContent}
                  onChange={(e) => {
                    setUpdateContent(e.target.value);
                  }}
                />
              </form>
              {showImageUpLoder && (
                <UpLoaderWrap>
                  <p>사진/동영상 추가</p>
                  <input ref={imageRef} onChange={readerUrl} type="file" />
                  <ImagePreview
                    src={
                      currentPost.image
                        ? updateImageUrl
                        : 'https://i0.wp.com/www.lumosmarketing.io/wp-content/uploads/2019/04/placeholder-image.jpg?resize=360%2C300&ssl=1'
                    }
                  />
                </UpLoaderWrap>
              )}
              <div className="imageBox">
                <img
                  height="38"
                  src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                />
                <div />
              </div>
            </div>
            <div className="write__bottom">
              <div className="addPostBottom">
                <h4>게시물에 추가</h4>
              </div>
              <div className="addIcon">
                <div className="write__option" onClick={handleImageUpLoader}>
                  <FilterIcon style={{ color: '#45bd62', fontSize: '24px' }} />
                </div>
                <div className="write__option">
                  <LocalOfferIcon
                    style={{ color: '#1877f2', fontSize: '24px' }}
                  />
                </div>
                <div className="write__option">
                  <InsertEmoticonOutlinedIcon
                    style={{ color: '#f7b928', fontSize: '24px' }}
                  />
                </div>
                <div className="write__option">
                  <RoomIcon style={{ color: '#f5533d', fontSize: '24px' }} />
                </div>
                <div className="write__option">
                  <MicIcon style={{ color: '#f02849', fontSize: '24px' }} />
                </div>
                <div className="write__option">
                  <MoreHorizIcon style={{ color: '#606770' }} />
                </div>
              </div>
            </div>
            <div className="write__button">
              <button onClick={updatePost}>저장</button>
            </div>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
};

const UpLoaderWrap = styled.div`
  height: auto;
  border: 1px solid #ddd;
  margin: 10px 0px;
  border-radius: 10px;
`;

const ImagePreview = styled.div`
  /* size: px; */
  width: 80%;
  height: 250px;
  object-fit: cover;
  vertical-align: middle;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 20px auto;
`;
export default PostEdit;

import React from 'react';
import styled from 'styled-components';

const UpLoadBox = () => {
  const [imageUrl, setImageUrl] = React.useState('');
  const imageRef = React.useRef('');


  const readerUrl = () => {
    if (!imageRef.current.files[0]) {
      return;
    }
    const reader = new FileReader();
    const file = imageRef.current.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    
  };

  return (
    <UpLoaderWrap>
      <p>사진/동영상 추가</p>
      <input ref={imageRef} onChange={readerUrl} type="file" />
      <ImagePreview
        src={
          imageUrl
            ? imageUrl
            : 'https://i0.wp.com/www.lumosmarketing.io/wp-content/uploads/2019/04/placeholder-image.jpg?resize=360%2C300&ssl=1'
        }
      />
    </UpLoaderWrap>
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

export default UpLoadBox;

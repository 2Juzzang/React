import React from 'react';
import styled from 'styled-components';

const PostCard = ({ children, padding }) => {
  const styles = { padding };
  return <Card {...styles}>{children}</Card>;
};

PostCard.defaultProps = {
  children: null,
  padding: false,
};

const Card = styled.div`
  width: 680px;
  height: auto;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : null)}
  background-color: white;
`;

export default PostCard;

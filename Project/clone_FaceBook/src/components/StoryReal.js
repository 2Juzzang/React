import React from 'react';
import Story from './Story';
import "./Style/StoryReal.css";

const StoryReal = () => {
  return (
    <div className="storyReal">
      <Story
        image="https://cdn.pixabay.com/photo/2016/10/22/05/02/photo-session-in-the-body-1759810_960_720.jpg"
        profileSrc="https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_372/c89e5703-03ee-4dcb-9f4e-68cf0a1950f3.jpg"
        title="고민"
      />
      <Story 
        image="https://cdn.pixabay.com/photo/2021/08/31/11/58/woman-6588614_960_720.jpg"
        profileSrc="http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
        title="나비" />
      <Story
        image="https://cdn.pixabay.com/photo/2021/08/14/20/44/stones-6546233_960_720.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDZ4WmsvL0lvEzv8UrFD3zGtNw6FLWLNr9Q&usqp=CAU"
        title="돌" />
      <Story
        image="https://cdn.pixabay.com/photo/2021/10/08/15/48/knight-6691692_960_720.jpg"
        profileSrc="https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjlfMzcg/MDAxNTUzODI3OTU3NTg1.geQ7whX1F1DWXBeARbVmBfuqZWp_Db152hko56ZQneIg.5fjMBtfCJeBPcwr1CIndT4qQGbepVcgI9skIDJkEDq8g.JPEG.petianbooks/%EA%B0%95%EC%95%84%EC%A7%80_%EA%B0%B8%EC%9A%B0%EB%9A%B1.jpg?type=w800"
        title="기사" />
      <Story
        image="https://cdn.pixabay.com/photo/2021/08/14/17/46/tucan-6545867_960_720.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-VUSkrg28oW0eRkxQCm5p94S8xFVm-6OXw&usqp=CAU"
        title="투칸" />
    </div>
  );
};

export default StoryReal;

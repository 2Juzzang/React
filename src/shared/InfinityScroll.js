import React from "react";
import _ from "lodash";
import { Spinner } from "../elements";

const InfinityScroll = (props) => {
    
    const {children, callNext, is_next, loading} = props;

    const _handleScroll = _.throttle(()=>{
        // 로딩 중엔 callNext를 부르지 않는다. >> if문 사용
        if(loading){
            return; 
        }

        // 스크롤 영역 값 구하기
        const {innerHeight} = window;
        const {scrollHeight} = document.body;
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        if(scrollHeight - innerHeight - scrollTop < 200 ){
            callNext();
        }
    },300);

    //useCallback을 사용해 _handleScroll의 초기화를 방지해준다.
    const handleScroll = React.useCallback(_handleScroll, [loading]);

    // useEffect를 사용해서 처음 로드가 됐을 때 이벤트를 달아줌
    React.useEffect(() => {
        //로딩중일 때(데이터를 불러오는 중일 때) 다른 동작을 막아준다.
        if(loading){
            return;
        }

        //리소스를 줄이기 위해 if문 사용
        if(is_next){
            //is_next가 있으면 실행
            window.addEventListener("scroll", handleScroll);
        }else{
            //없으면 실행 중지
            window.removeEventListener("scroll", handleScroll);
        }
        
        // 리턴을 넣어서 이벤트 구독 해제를 해준다. 
        // useEffect에서 return해주는 것을 '클린업' 한다고 한다.
        // 이 함수형 컴포넌트가 화면에서 사라질 때 return에 있는 구문이 실행이 된다.
        return () => window.removeEventListener("scroll", () => {});
    }, [is_next, loading]);

    return(
        <React.Fragment>
            {props.children}
            {is_next && (<Spinner/>)}
        </React.Fragment>
    );
}

InfinityScroll.defaultProps = {
    children: null,
    // 다음 페이지 목록을 불러오는 함수
    callNext: () => {},
    is_next: false,
    // 로딩을 넣어줌으로써 같은 페이지를 불러오는 일을 방지
    loading: false,
}

export default InfinityScroll;
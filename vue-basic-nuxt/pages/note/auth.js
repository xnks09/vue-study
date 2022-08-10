//미들웨어를 통해 컴포넌트가 호출되기 전에 특정 코드 실행 가능
//사용하기 위해서는 middleware에 js 파일을 만들어줘야함
export default function({store, redirect}){
    
    if (로그인하지 않았을 때){ //store.state.isLogin으로 스토어에 접근할 수 있음

        return redirect('/signin')
    }
}
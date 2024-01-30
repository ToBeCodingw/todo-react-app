import React from "react"
import{
    ListItem,
    ListItemText,
    InputBase,
    Checkbox
} from "@material-ui/core"
class ToDo extends React.Component{
    //생성자
    constructor(props){
        super(props); //상위 클래스에서 넘겨준 모든 props를 현재 클래스에 저장
        //state생성
        //item이라는 이름으로 props중에서 item이라는 값을 state로 저장
        //props는 상위 컴포넌트에서 전달한 데이터라서 읽기는 가능하지만 수정 불가
        //수정이나 삭제를 하고자 하는 경우는 state로 변환해야함
        this.state = {item:this.props.item}
    }


    render(){
        const item = this.state.item // const는 상수 만드는거 자주 사용하는 데이터를 짧게 사용하기 위해 다른 변수에 대입
        return(
            <div className="ToDo">
                <ListItem>
                <Checkbox 
                    id = {item.id}
                    name = {item.id}
                    checked = {item.done}
                    />
                    <ListItemText>
                        <InputBase
                            inputProps={{"aria-label":"naked"}}
                            type="text"
                            id={item.id}
                            name={item.id}
                            value={item.title}
                            multiline={true}
                            fullWidth={true}
                        />
                    </ListItemText>

                </ListItem>
                </div>
        )
    }
}
export default ToDo;
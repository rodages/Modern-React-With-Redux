import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from "faker";


const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <CommentDetail 
                avatar={faker.image.image()} 
                name={"Sam"} time={"Today at 16:30"} 
                comment={"nice blog post!"}
                />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail 
                avatar={faker.image.image()} 
                name={"Bob"} 
                time={"Today at 6:30"} 
                comment={"not so nice blog post!"}
                />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail 
                avatar={faker.image.image()}
                name={"Jes"} 
                comment={"nice blog post!"}
                time={"Today at 160:30"}
                comment={"i like blog post!"}
                />
            </ApprovalCard>
        </div>
        )
}

ReactDOM.render(<App/>, document.querySelector('#root'));
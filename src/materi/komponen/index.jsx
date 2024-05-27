import React from "react";
import ClassComponent from "./pembahasan/classComponent";
import FunctionalComponent from "./pembahasan/functionalComponent";

export default class Komponen extends React.Component {

    render(){
        return(
            <div>
                <ClassComponent nama="Edi soepono"/>
                <FunctionalComponent nama={23} />
            </div>
        )
    }
}
import React from "react";

export function checkEmail(text: string){
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(text);
}

export function checkPassword(text: string){

}

export function checkName(text: string){
    const pattern = /^(?=\S{3,})(\S+\s\S+)+$/;
    return pattern.test(text);
}

export function checkOrg(text: string){

}

export function checkCNPJ(text: string){

}
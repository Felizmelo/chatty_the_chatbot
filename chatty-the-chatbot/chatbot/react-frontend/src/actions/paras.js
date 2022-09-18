// Import types
import { INPUT_SUCCESS, INPUT_FAIL, SESSION_FAIL, SESSION_SUCCESS, MESSAGE_SUCCESS, MESSAGE_FAIL, QUESTION_BANK_UPDATE } from "./types"

// Fn que lida com a mensagem do usuário
export const UserMessage = (message) => async (dispatch) => {
    // console.log(message)
    try {
        dispatch({ type: INPUT_SUCCESS, payload: message })
    } catch (err) {
        console.log("dispatch failed", err)
        dispatch({ type: INPUT_FAIL })
    }
}

// Criar uma sessão - Chamada API
export const CreateSession = () => async (dispatch) => {
    try {
        // const res = api chamada para obter a sessão que terá um ditado de dados com "session_id" como uma chave
        let res = { data: { 'session_id': '123abcd' } }
        dispatch({ type: SESSION_SUCCESS, payload: res.data })
    } catch (err) {
        dispatch({ type: SESSION_FAIL })
    }
}
// Envia a mensagem para o bot -API Call

export const SendMessage = (message) => async (dispatch) => {
    try {
    
        if (message === undefined || message.length === 0 || message === null){
            message = "Legal!, vou manter isso em mente"
        }
        dispatch({ type: MESSAGE_SUCCESS, payload: message })
    } catch (err) {
        dispatch({ type: MESSAGE_FAIL })
    }
}

// atualizar banco de perguntas json
export const UpdateQuestionBank = (jsObject) => async (dispatch) => {
    try {
        dispatch({ type: QUESTION_BANK_UPDATE, payload: jsObject })
    } catch (err) {
        console.log(err)
    }
}
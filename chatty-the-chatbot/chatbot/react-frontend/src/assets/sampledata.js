const sampleData = [
    {
        "name": "init",
        "question": "Escolha o caso",
        "type": "radio",
        "options": {
            "A": "A",
            "B": "B",
            "C": "C"
        }
    },
    {
        "case": "A",
        "question": "Por que você escolheu A?",
        "type": "text"
    },
    {
        "case": "B",
        "question": "Por que você escolheu B?||Por que não A ou C?",
        "type": "text"
    },
    {
        "case": "C",
        "question": "Por que você escolheu C?",
        "type": "checkbox",
        "options": {
            "a": "gato",
            "b": "camelo",
            "c": "pato"
        }
    }
];

export default sampleData;
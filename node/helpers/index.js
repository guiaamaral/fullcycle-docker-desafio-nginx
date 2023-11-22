const names = [
    "Miguel", "Sophia", "Davi", "Alice", "Arthur", "Julia", "Pedro", "Isabella", "Gabriel", "Manuela",
    "Bernardo", "Laura", "Lucas", "Luiza", "Matheus", "Valentina", "Rafael", "Giovanna", "Heitor",
    "Maria Eduarda", "Enzo", "Helena", "Guilherme", "Beatriz", "Nicolas", "Maria Luiza", "Lorenzo", "Lara",
    "Gustavo", "Mariana", "Felipe", "Nicole", "Samuel", "Rafaela", "João Pedro", "Heloísa", "Daniel",
    "Isadora", "Vitor", "Lívia", "Leonardo", "Maria Clara", "Henrique", "Ana Clara", "Theo", "Lorena",
    "Murilo", "Gabriela", "Eduardo", "Yasmin"]

const getRandomNumber = () => {
    return Math.floor(Math.random() * names.length)
}

const getRandomName = () => {
    return names[getRandomNumber()]
}

module.exports = {
    getRandomName
}
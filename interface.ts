
interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string
}

/* not allow
const messy: Player = {
    name: 'messy',
    club: 'arsenal',
    salary: '23232',
    wife: 'jackey'
} */

const messy: Player = {
    name: 'messy',
    club: 'arsenal',
    salary: 23232,
    wife: 'jackey'
}

const masum: Player = {
    name: 'Masum',
    club: 'abahoni',
    salary: 343
}

interface Employee{
    name: string,
    designation: string,
    salary: number,
    age: number
}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number
}

const mark: Developer = {
    name: 'john',
    designation: 'fsod',
    salary: 3434,
    language: 'javascript',
    codeEditor: 'vs code',
    typingSpeed: 54,
    age: 23
}
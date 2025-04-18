"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
}
let todos = [];
function addTodo(task) {
    todos.push(task);
    console.clear();
    console.log(`Taak toegevoegd: "${task}"`);
}
function showTodos() {
    console.log('\nJe taken:');
    if (todos.length === 0) {
        console.log('(geen taken)');
    }
    else {
        todos.forEach((task, index) => {
            console.log(`  ${index + 1}. ${task}`);
        });
    }
}
function showMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\n--- TO-DO MENU ---');
        console.log('1. Taak toevoegen');
        console.log('2. Taken tonen');
        console.log('3. Stoppen');
        const choice = yield ask('Kies een optie (1-3): ');
        switch (choice.trim()) {
            case '1':
                const taak = yield ask('Wat wil je toevoegen? ');
                addTodo(taak);
                break;
            case '2':
                showTodos();
                break;
            case '3':
                console.log('Tot later!');
                rl.close();
                return;
            default:
                console.log('Ongeldige keuze.');
        }
        yield showMenu();
    });
}
// MAIN
showMenu();

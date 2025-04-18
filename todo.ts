import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

let todos: string[] = [];

function addTodo(task: string): void {
  todos.push(task);
  console.clear();
  console.log(`Taak toegevoegd: "${task}"`);
}

function showTodos(): void {
  console.log('\nJe taken:');
  if (todos.length === 0) {
    console.log('(geen taken)');
  } else {
    todos.forEach((task, index) => {
      console.log(`  ${index + 1}. ${task}`);
    });
  }
}

async function showMenu(): Promise<void> {
  console.log('\n--- TO-DO MENU ---');
  console.log('1. Taak toevoegen');
  console.log('2. Taken tonen');
  console.log('3. Stoppen');

  const choice = await ask('Kies een optie (1-3): ');

  switch (choice.trim()) {
    case '1':
      const taak = await ask('Wat wil je toevoegen? ');
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

  await showMenu();
}

// MAIN
showMenu();

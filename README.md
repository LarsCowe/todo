# Todo CLI Applicatie

Een eenvoudige command-line todo-applicatie gemaakt met TypeScript waarmee je een lijst van taken kunt bijhouden.

## Functionaliteiten

- Taken toevoegen aan je lijst
- Overzicht bekijken van alle taken
- Gebruiksvriendelijke menu-interface

## Vereisten

- Node.js (LTS versie, 20.x of hoger)
- TypeScript (5.x of hoger)

## Installatie

1. Clone de repository:
```bash
git clone https://github.com/LarsCowe/todo.git
cd todo
```

2. Installeer de benodigde dependencies:
```bash
npm install
```

3. Compileer het TypeScript naar JavaScript:
```bash
npx tsc
```

## Gebruik

Start de applicatie met:
```bash
node dist/index.js
```

Volg daarna de instructies op het scherm:
1. Kies optie 1 om een nieuwe taak toe te voegen
2. Kies optie 2 om al je taken te bekijken
3. Kies optie 3 om de applicatie af te sluiten

## Projectstructuur

```
todo/
├── src/
│   └── index.ts         # Hoofdapplicatiecode
├── dist/                # Gecompileerde JavaScript bestanden
├── package.json         # Project metadata en dependencies
├── tsconfig.json        # TypeScript configuratie
└── README.md            # Deze documentatie
```

## Doorontwikkeling

Ideeën voor toekomstige verbeteringen:
- Taken kunnen verwijderen
- Taken als voltooid kunnen markeren
- Taken opslaan in een bestand of database
- Prioriteiten toekennen aan taken

## Licentie

MIT

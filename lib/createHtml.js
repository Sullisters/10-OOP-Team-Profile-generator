const path = require('path')
const fs = require('fs')

const cards = path.resolve(__dirname, '../teamCards');

const create = (employees)=>{
    const html = [];

    html.push(
        ...employees.filter((employee)=>employee.getRole() ==='Manager').map((manager)=> createManager(manager))
    );
    html.push(
        ...employees.filter((employee)=>employee.getRole() ==='Engineer').map((engineer)=> createEngineer(engineer))
    );
    html.push(
        ...employees.filter((employee)=>employee.getRole() ==='Intern').map((intern)=> createIntern(intern))
    );

    return createMain(html.join(''));
};

const createManager = (manager)=>{
    let create = fs.readFileSync(path.resolve(cards, 'manager.html'), 'utf-8');
    create = newCreate(create, 'name', manager.getName())
    create = newCreate(create, 'id', manager.getId())
    create = newCreate(create, 'email', manager.getEmail())
    create = newCreate(create, 'officeNumber', manager.getOfficeNumber())
    return create;
};

const createEngineer = (engineer)=>{
    let create = fs.readFileSync(path.resolve(cards, 'engineer.html'), 'utf-8');
    create = newCreate(create, 'name', engineer.getName())
    create = newCreate(create, 'id', engineer.getId())
    create = newCreate(create, 'email', engineer.getEmail())
    create = newCreate(create, 'officeNumber', engineer.getOfficeNumber())
    return create;
};

const createIntern = (intern)=>{
    let create = fs.readFileSync(path.resolve(cards, 'intern.html'), 'utf-8');
    create = newCreate(create, 'name', intern.getName())
    create = newCreate(create, 'id', intern.getId())
    create = newCreate(create, 'email', intern.getEmail())
    create = newCreate(create, 'officeNumber', intern.getOfficeNumber())
    return create;
};

const createIndex = (html)=>{
    const create = fs.readFileSync(path.resolve(cards, 'index.html'), 'utf-8');
    return newCreate(create, 'team', html);
};

const newCreate = (create, placeholder, value)=>{
    const pattern = new RegExp('{{ '+placeholder+' }}', 'gm');
    return create.replace(pattern, value);
};

module.exports = create;
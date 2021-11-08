const crudFunctions = require('../crud')

describe('CRUD Tasks', () => {
  const tasks = [{ id: "123", name: "Tarea 1", description: "Descripcion 1" }]

  describe('Add task', () => {
     const newTask = { id: "124", name: "Tarea 2", description: "Descripcion 2" } 
     const expected = [{ id: "123", name: "Tarea 1", description: "Descripcion 1" }, { id: "124", name: "Tarea 2", description: "Descripcion 2" }]
  
   it('Validar si cuando agrego un item no se modifica el array original', () => {
    expect(crudFunctions.addTask(tasks ,newTask)).toEqual(expect.arrayContaining(tasks));
   });
  
   it('Validar si se está agregando un item', () => {
     expect(crudFunctions.addTask(tasks ,newTask)).toEqual(expected)
   });
  })

  describe('Edit task', () => {
     const tasksId = "123"
     const expected = []
  
   it('Validar que el nuevo array no contenga el item que estamos eliminando', () => {
    expect(crudFunctions.delTask(tasks, tasksId)).toEqual(expect.not.arrayContaining(tasks));
   });
  
   it('Validar si se está agregando un item', () => {
     expect(crudFunctions.delTask(tasks, tasksId)).toEqual(expected)
   });
  })

  describe('Edit task', () => {
     const tasksId = "123"
     const taskEdited = [{ id: "123", name: "Tarea 1 EDITADO", description: "Descripcion 1 EDITADO" }]
  
   it('Validar si se está editando un item', () => {
     expect(crudFunctions.editTask(tasks, tasksId, taskEdited[0])).toEqual(taskEdited)
   });
  })
})

describe('arrayContaining', () => {
  const expected = ['Alice', 'Bob'];
  it('matches even if received contains additional elements', () => {
    expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
  });
});

describe('Beware of a misunderstanding! A sequence of dice rolls', () => {
  const expected = [1, 2, 3, 4, 5, 6];
  it('matches even with an unexpected number 7', () => {
    expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(
      expect.arrayContaining(expected),
    );
  });
  it('does not match without an expected number 2', () => {
    expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(
      expect.arrayContaining(expected),
    );
  });
});

describe('not.arrayContaining', () => {
  const expected = ['Alice', 'Bob', 'Eve'];

  it('matches if the actual array does not contain the expected elements', () => {
    expect(['Alice', 'otra']).toEqual(
      expect.not.arrayContaining(expected),
    );
  });
});

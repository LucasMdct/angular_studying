import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';
import { provideHttpClient } from '@angular/common/http';

describe('TodosService', () => {
  let todosService: TodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodosService,
        provideHttpClient()
      ]
    });
    todosService = TestBed.inject(TodosService);
  });

  it('should be created', () => {
    expect(todosService).toBeTruthy();
  });

  it('should return all TODOS', () => {
    todosService.getAll().subscribe(todos => {
      expect(todos).toBeTruthy();
      expect(todos.length).toEqual(200);

      const todo = todos.find(todo => todo.id === 15);
      expect(todo?.title).toEqual('accusamus eos facilis sint et aut voluptatem')
    })
  });

   it('should return todo for id', async () => {
    const todo = await todosService.getById(10).toPromise();

    expect(todo).toBeTruthy();
    expect(todo?.id).toEqual(10);
  });
});

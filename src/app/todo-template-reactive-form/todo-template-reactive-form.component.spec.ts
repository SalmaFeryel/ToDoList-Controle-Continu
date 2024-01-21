import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTemplateReactiveFormComponent } from './todo-template-reactive-form.component';

describe('TodoTemplateReactiveFormComponent', () => {
  let component: TodoTemplateReactiveFormComponent;
  let fixture: ComponentFixture<TodoTemplateReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoTemplateReactiveFormComponent]
    });
    fixture = TestBed.createComponent(TodoTemplateReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

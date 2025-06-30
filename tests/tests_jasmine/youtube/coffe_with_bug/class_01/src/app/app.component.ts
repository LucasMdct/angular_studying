import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodosService } from './_service/todos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'class_01';

  constructor(private todoService: TodosService) {

  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe((response) => {
      console.log(response);
    })

    this.todoService.getById(1).subscribe((response) => {
      console.log(response);
    })
  }
}

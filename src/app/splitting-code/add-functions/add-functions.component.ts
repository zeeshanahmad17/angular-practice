import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-functions',
  templateUrl: './add-functions.component.html',
  styleUrls: ['./add-functions.component.css']
})
export class AddFunctionsComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>;
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>;
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}

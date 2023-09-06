import { Component } from '@angular/core';

@Component({
  selector: 'app-splitting-code',
  templateUrl: './splitting-code.component.html',
  styleUrls: ['./splitting-code.component.css']
})
export class SplittingCodeComponent {
  serverElements = [{ type: 'server', name: 'hardcoded server', content: 'hardcoded content' }];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onAddBlueprint(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}

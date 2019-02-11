import { Component } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-gojs',
  templateUrl: './gojs.component.html',
  styleUrls: ['./gojs.component.css']
})
export class GojsComponent{
  title = 'GoJS in Angular';


  ngAfterViewInit() {
      var $ = go.GraphObject.make;  // for conciseness in defining templates
   
      var myDiagram =
        $(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
          { // enable undo & redo
            "undoManager.isEnabled": true
          });
   
      // define a simple Node template
      myDiagram.nodeTemplate =
        $(go.Node, "Auto",  // the Shape will go around the TextBlock
          $(go.Shape, "RoundedRectangle",
            { strokeWidth: 0, fill: "white" },  // default fill is white
            // Shape.fill is bound to Node.data.color
            new go.Binding("fill", "color")),
          $(go.TextBlock,
            { margin: 8 },  // some room around the text
            // TextBlock.text is bound to Node.data.key
            new go.Binding("text", "key"))
        );
   
      // but use the default Link template, by not setting Diagram.linkTemplate
   
      // create the model data that will be represented by Nodes and Links
      myDiagram.model = new go.TreeModel(
      // myDiagram.model = new go.GraphLinksModel(
      [
        { key: "Alpha", color: "lightblue" },
        { key: "Beta", color: "orange" ,parent:'Alpha'},
        { key: "Gamma", color: "lightgreen",parent:'Alpha' },
        { key: "Delta", color: "pink",parent:'Alpha' },
        { key: "Charlie", color: "purple" ,parent:'Alpha'},
        { key: "Bravo", color: "grey",parent:'Alpha' },
        { key: "Estela", color: "yellow",parent:'Bravo' }
      ],
      // [
      //   { from: "Alpha", to: "Beta" },
      //   { from: "Alpha", to: "Gamma" },
      //   { from: "Beta", to: "Beta" },
      //   { from: "Gamma", to: "Delta" },
      //   { from: "Bravo", to: "Alpha" },
      //   { from: "Charlie", to: "Bravo" }
      // ]
      );
  }

}

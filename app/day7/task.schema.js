angular.module('MiHexample').value("Schema",
{
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "done": {
        "type": "boolean"
      },
      "due_date": {
        "type": "string",
        "format": "date"
      },
      "rating": {
        "type": "integer",
        "maximum": 5
      },
      "recurrence": {
          "type": "string",
          "enum":["Never","Daily","Weekly","Monthly"]
      },
      "recurrence_interval":{
          "type": "integer"
      }
    },
    "required": ["name"]
});

function doGet() {
  return HtmlService.createTemplateFromFile("Dashboard")
    .evaluate()
    .setTitle("Trung tâm Thiền & Học liệu");
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function handleAction(action) {
  Logger.log("Action requested: %s", action);
  return true;
}


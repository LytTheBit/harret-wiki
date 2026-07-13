const { getGraph } = require("../../helpers/linkUtils");
const { getFileTree } = require("../../helpers/filetreeUtils");
const { userComputed } = require("../../helpers/userUtils");

module.exports = {
  graph: async (data) => await getGraph(data),
  filetree: (data) => getFileTree(data),
  userComputed: (data) => userComputed(data),
  noteProps: (data) => data["dg-note-properties"],
  title: (data) =>
    Object.prototype.hasOwnProperty.call(data, "dg-page-title")
      ? data["dg-page-title"]
      : undefined,
  hideTitle: (data) => data["dg-page-title"] === ""
};

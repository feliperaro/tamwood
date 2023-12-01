console.log("jQuery", jQuery().jquery);
let table = new DataTable("#example", {
  scrollY: 300,
  paging: false,
  columnDefs: [
    {
      render: (data, type, row) => {
        data = data.replace(data, data.split(" ")[0]);
        return data;
      },
      targets: 0,
    },
    {
      render: (data, type, row) => {
        data = data.replace(
          "Javascript Developer",
          "<b>Javascript Developer</b>"
        );
        return data;
      },
      targets: 1,
    },
    { visible: false, targets: [3] },
  ],
});

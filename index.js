const getAdvice = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);
    $("#author").text(data.slip.id);
    $("#text").text(data.slip.advice);
  } catch (error) {
    console.log(error);
  }
};

$(document).ready(function () {
  $(window).on("load", function () {
    getAdvice();
  });

  $("#new-quote").on("click", function () {
    getAdvice();
  });
});

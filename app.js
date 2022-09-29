$(function () {
  //write your code here

  const coloringSpans = (theElement, colorText) => {
    theElement.find("span").css({
      fontWeight: "bolder",
      fontSize: "18px",
      color: `${colorText}`,
    });
  };

  const dimmingBackground = (decimalAlpha) => {
    $("#race-track").css({
      backgroundColor: `rgba(0, 0, 0,${decimalAlpha})  `,
      backgroundBlendMode: "darken",
    });
  };

  const stylingFirstTable = (car) => {
    car.css({
      width: "50%",
      padding: "30px",
      border: "1px solid white",
    });
  };

  const checkingWhichCarIsFaster = (fasterCar, slowerCar) => {
    if (fasterCar < slowerCar) {
      return "first";
    } else {
      $("#race-btn").prop("disabled", false);
      $("#start-over").prop("disabled", false);
      return "second";
    }
  };
  const populateTds = (whichTd, placingWhichCar, racingTimeWhichCar) => {
    $("#finish-flag").show();

    whichTd.html(
      `Finished in:<span> ${placingWhichCar}</span> with a time of:<span> ${racingTimeWhichCar} </span> miliseconds`
    );
  };
  const afterAnimate = (
    decimalAlpha,
    fasterCar,
    slowerCar,
    whichTd,
    someArg,
    colorText
  ) => {
    dimmingBackground(decimalAlpha);
    checkingWhichCarIsFaster(fasterCar, slowerCar);
    populateTds(whichTd, someArg, fasterCar);
    coloringSpans(whichTd, colorText);
    stylingFirstTable(whichTd);
  };

  const populateSecondTable = (
    theTr,
    carOneOrCarTwo,
    fasterCar,
    slowerCar,
    storageItem
  ) => {
    theTr.html(`
      <td><span>${carOneOrCarTwo}</span> finished in <span>${
      fasterCar < slowerCar ? "first" : "second"
    } </span> place, with a time of <span> ${localStorage.getItem(
      `${storageItem}`
    )}</span> miliseconds</td>
      
    `);
    theTr.find("td").css({
      padding: "10px 0",
    });
  };

  if (
    localStorage.getItem("firstCarTime") &&
    localStorage.getItem("secondCarTime")
  ) {
    let timeOfStorageFirstCar = localStorage.getItem("firstCarTime");
    let timeOfStorageSecondCar = localStorage.getItem("secondCarTime");
    $("#second-table").show();
    populateSecondTable(
      $("#car1-local-storage"),
      "Car1",
      timeOfStorageFirstCar,
      timeOfStorageSecondCar,
      "firstCarTime"
    );

    coloringSpans($("#car1-local-storage"), "white");
    populateSecondTable(
      $("#car2-local-storage"),
      "Car2",
      timeOfStorageSecondCar,
      timeOfStorageFirstCar,
      "secondCarTime"
    );

    coloringSpans($("#car2-local-storage"), "red");
    $("#tbody-second td").css({
      border: "1px solid white",
    });
  }
  $("#finish-flag").hide();
  $("#race-btn").click(() => {
    if ($("#finish-flag").is(":visible")) {
      return;
    }
    let seconds = 3;

    let isFinished = false;

    if (!isFinished) {
      $("#race-btn").prop("disabled", true);
      $("#start-over").prop("disabled", true);
    }
    $("#countdown").css({
      fontSize: "100px",
      display: "block",
      color: "white",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    });

    dimmingBackground(0.4);
    const myTimer = () => {
      $("#countdown").html(`${seconds}`);
      seconds--;
      if (seconds < 0) {
        clearInterval(theCountDown);

        dimmingBackground(0);

        $("body").css({
          filter: "brightness(100%)",
        });
        $("#countdown").css({ display: "none" });
        $("#countdown").html(``);
        let firstCarWidth = $("#car-one-img").width();

        let trackWidth = $("#race-track").width() - firstCarWidth;

        let racingTimeFirstCar = Math.floor(Math.random() * 5000 + 2);
        let racingTimeSecondCar = Math.floor(Math.random() * 5000 + 2);

        localStorage.setItem("firstCarTime", racingTimeFirstCar);
        localStorage.setItem("secondCarTime", racingTimeSecondCar);

        let theTr = $("<tr></tr>");

        let populateTableTdFirstCar = $("<td></td>");
        let populateTableTdSecondCar = $("<td></td>");
        theTr.append(populateTableTdFirstCar, populateTableTdSecondCar);
        $("#tbody-first").prepend(theTr);

        $("#car-one-img").animate(
          {
            left: trackWidth,
          },
          racingTimeFirstCar,
          function () {
            let placingFirstCar = checkingWhichCarIsFaster(
              racingTimeFirstCar,
              racingTimeSecondCar
            );
            afterAnimate(
              0.4,
              racingTimeFirstCar,
              racingTimeSecondCar,
              populateTableTdFirstCar,
              placingFirstCar,
              "white"
            );
          }
        );
        $("#car-two-img").animate(
          {
            left: trackWidth,
          },
          racingTimeSecondCar,
          function () {
            let placingSecondCar = checkingWhichCarIsFaster(
              racingTimeSecondCar,
              racingTimeFirstCar
            );
            afterAnimate(
              0.4,
              racingTimeSecondCar,
              racingTimeFirstCar,
              populateTableTdSecondCar,
              placingSecondCar,
              "red"
            );
          }
        );
      }
    };
    const theCountDown = setInterval(myTimer, 1000);
  });
  $("#start-over").click(() => {
    dimmingBackground(0);
    $("#finish-flag").css({
      display: "none",
    });
    $("#car-one-img").css({
      left: 0,
    });
    $("#car-two-img").css({
      left: 0,
    });
  });
});

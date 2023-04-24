let ctx = document.querySelector("canvas").getContext("2d");

    const results = [
        {mood: "Netherlands", total: 799, shade: "#fcca46"},
        {mood: "Bulgaria", total: 578, shade: "#a1c181"},
        {mood: "Aruba", total:332, shade: "#fe7f2d"},
        {mood: "Romania", total: 195, shade: "#619b8a"}
    ];

    let sum = 0;
    let totalNumberOfStudents = results.reduce((sum, {total}) => sum + total, 0);
    let currentAngle = 0;

    for (let moodValue of results) {
        //calculating the angle the slice (portion) will take in the chart
        let portionAngle = (moodValue.total / totalNumberOfStudents) * 2 * Math.PI;
        //drawing an arc and a line to the center to differentiate the slice from the rest
        ctx.beginPath();
        ctx.arc(100, 100, 100, currentAngle, currentAngle + portionAngle);
        currentAngle += portionAngle;
        ctx.lineTo(100, 100);
        //filling the slices with the corresponding mood's color
        ctx.fillStyle = moodValue.shade;
        ctx.fill();
    }
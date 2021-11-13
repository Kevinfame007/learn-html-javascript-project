// Operators

/*
    Operators คือ เครื่องหมายต่างๆที่เอาไว้ใช้ทำการคำนวณทางคณิตศาสตร์หรือตรรกะ
    ก่อนขึ้นเรื่อง operators ควรเข้าใจชนิดพื้นฐานของตัวแปร

    number (ตัวเลข) เช่น 10, 5.555
    string (ตัวอักษร) เช่น "abcd" , "5.555" < สังเกตุว่ามี " " ครอบตัวแปลที่เป็นสตริงเสมอ
    boolean (ค่าความเป็นจริง) คือ true หรือ false

*/

// Aritmatic operator

/*

    +   บวก         console.log(4 + 2); // ได้ 6
    -   ลบ          console.log(4 - 2); // ได้ 2
    *   คูณ          console.log(4 * 2); // ได้ 8
    /   หาร          console.log(4 / 2); // ได้ 2
    **  ยกกำลัง       console.log(4 ** 2);// ได้ 16
    %   มอดดูโล หารเอาเศษ    console.log(10 % 3) // ได้ 1
    ++  +1 กับตัวแปรที่ถูกดำเนินการ
        เขียนได้ 2 แบบ คือ x++ และ ++x
        x++ จะให้ค่า x ก่อนบวก
        ++x จะให้ค่า x หลังบวก

        var x = 10;
        console.log(x++); // ได้ 10
        console.log(x); // ได้ 11

        var y = 10;
        console.log(++y); // ได้ 11
        console.log(y); // ได้ 11

    -- -1 กับตัวแปรที่ถูกดำเนินการ
        เขียนได้สองแบบ คือ x-- และ --x เหมือน ++

        var x = 10;
        console.log(--x); // ได้ 9

*/

// Comparison operators

/*

    == และ ===      เท่ากับ
    != และ !==      ไม่เท่ากับ
    >               มากกว่า
    >=              มากกว่าหรือเท่ากับ
    <               น้อยกว่า
    <=              น้อยกว่าหรือเท่ากับ

    ตัวอย่าง :
    console.log(1 === 1); // ได้ true
    console.log(2 <= 1); // ได้ false

*/

// Assignment operators

/*

    x = y       x = y
    x += y      x = x + y
    x -= y      x = x - y
    x *= y      x = x * y
    x /= y      x = x / y

    ตัวอย่าง :
    Let a = 10;
    10 += 5; a = a + 5;
    console.log(a); // ได้ 15

*/

//  Logical operators

/*

    Logical operators ทั่วไปจะใช้เปรียบเทียบระหว่างคำ boolean
    ใน JavaScript มี logical operator คือ && (และ) กับ || (หรือ)

    ตัวอย่าง
    console.log(true && true); // ได้ true
    console.log(true && false); // ได้ false
    console.log(true || true); // ได้ true
    console.log(false || false); // ได้ false

    && จะถูกคำนวณก่อน ||
    สามารถใช้วงเล็บบอกลำดับการเปรียบเทียบได้

    ตัวอย่าง:
    console.log(false && true || true); // ได้ true
    console.log(false && (true || true)); // ได้ 
    
    หากมีโลจิกที่ซับซ้อน แนะนำให้ครอบวงเล็บให้ชัดเจน

*/
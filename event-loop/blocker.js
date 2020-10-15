setTimeout(() => {  
    let i = 0;
    while (i < 1000000) {
        console.log(`${i} - blocking server `);
        i++;
    }
}, 0);

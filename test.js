import {check} from 'k6';
import http from 'k6/http';

export let optionc = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '10s', target: 100 },
        { duration: '10s', target: 150 },
        { duration: '10s', target: 250 },
    ]
}

export default function (){
    const url ="https://restcountries.com";

    const res = http.get(url);

    check(res, {
        ' status 200' : (r) => r.status === 200,
    });

    console.log(`Tiempo de carga: ${res.timings.duration}ms`);
}
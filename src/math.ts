export function calctipAmount(billAmount: number, tipPercent: number) {

    const tp = (billAmount * (tipPercent / 100)).toFixed(2).toString();

    return tp;

}


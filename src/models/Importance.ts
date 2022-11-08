export type Importance = 1 | 2 | 3

export const NumToImportance = (val: number) => {
    let output: Importance
    switch (val) {
    case 1: {output = 1;
            break;}
    case 2: {output = 2;
            break;}
    case 3: {output = 3;
            break;}

    default: { output = 2;
            break;}

    }
    return output
}
import {match} from "ts-pattern"

export const truncateString = (str: string, maxLength: number, reverse = false) => {
    return match(str.length > maxLength)
        .with(true, () => 
            match(reverse)
                .with(true, () => '...' + str.slice(-maxLength))
                .otherwise(() => str.slice(0, maxLength) + '...')
        )
        .otherwise(() => str);
};
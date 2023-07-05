export function greetings(username: string) {
    const now: Date = new Date();
    const hour: number = now.getHours();
    if (hour < 12) {
        return `Dear ${username}, Good morning!`;
    } else if (hour >= 12 && hour < 18) {
        return `Dear ${username}, Good afternoon!`;
    } else {
        return `Dear ${username}, good night yo!`;
    }
}
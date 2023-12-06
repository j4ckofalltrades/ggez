/**
Computes the Kill-Death-Assist ratio (KDA), the higher it is from 1, the better the player's performance.

@param k - The number of player kills.
@param d - The number of player deaths.
@param a - The number of player assists.
@returns The Kill-Death-Assist (KDA) ratio.
*/
export function kda(k: number, d: number, a: number): number

/**
Computes the dominance factor (DF) which is a point sum, where each kill progresses the sum by 2, each assist
progresses the sum by 1, and each death regresses the sum by 3.

@param k - The number of player kills.
@param d - The number of player deaths.
@param a - The number of player assists.
@returns The Dominance Factor (DF).
*/
export function df(k: number, d: number, a: number): number

/**
 * Computes the Kill Participation ratio (KP) which measures a player's involvement in fights or duels across a given
 * game, and is defined as the percentage ratio of the sum of kills and assists, over the team score.
 *
 * @param k - The number of player kills.
 * @param a - The number of player assists.
 * @param tk - The total number of a team's kills.
 * @returns The Kill Participation (KP) ratio.
 */
export function kp(k: number, a: number, tk: number): number

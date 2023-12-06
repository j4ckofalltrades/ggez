# ggez

> Compute player performance statistics.

## Install

```shell
npm install ggez
```

## Usage

```javascript
import { kda } from "ggez"

kda(6, 2, 5)
//=> 5.5
```

## API

All arguments are sanitized e.g.:

- invalid inputs are treated as zero (0) e.g. `null`, `undefined`, non-numeric strings, etc.
- decimal values are dropped

In the case of zero player deaths, it is raised to 1 when performing the computations e.g. `Math.max(d, 1)`.

### Kill Ratios

#### `kda(k, d, a)`

##### k

Type: `number`

The number of player kills.

##### d

Type: `number`

The number of player deaths.

##### a

Type: `number`

The number of player assists.

Computes the Kill-Death-Assist ratio (KDA), the higher it is from 1, the better the player's performance.

### Dominance Statistics

#### `df(k, d, a)`

##### k

Type: `number`

The number of player kills.

##### d

Type: `number`

The number of player deaths.

##### a

Type: `number`

The number of player assists.

Computes the dominance factor (DF) which is a point sum, where each kill progresses the sum by 2, each assist
progresses the sum by 1, and each death regresses the sum by 3.

### Participation Statistics

#### `kp(k, a, tk)`

##### k

Type: `number`

The number of player kills.

##### a

Type: `number`

The number of player assists.

##### tk

Type: `number`

The total number of a team's kills.

Computes the Kill Participation ratio (KP) which measures a player's involvement in fights or duels across a given game,
and is defined as the percentage ratio of the sum of kills and assists, over the team score.

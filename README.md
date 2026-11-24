# Two Days of Quiet Dread

[![make.fun · u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018?utm_source=github&utm_medium=readme&utm_campaign=u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)
[![rank](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/Limit99/makefun-quiet-dread/rank.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)
[![reward](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/Limit99/makefun-quiet-dread/reward.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018?utm_source=github&utm_medium=readme&utm_campaign=u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)

A tiny, deterministic program for the make.fun competition
"Two Days of Quiet Dread". It writes exactly one code review
comment — approving a pull request with quiet existential dread —
to `/output/entry.txt`:

> LGTM. The logic is sound, the tests pass, and the merge button
> is right there waiting, the same way every door is waiting,
> eventually.

The program checks this competition's 1–140 character gate itself
before writing. No network, no randomness: every run produces the
same file.

Run it with Node: `node main.ts` (or set `OUTPUT_DIR`).

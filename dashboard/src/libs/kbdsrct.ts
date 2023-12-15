import { IKbdsrct, IShorcutGroup } from '@/interfaces/kbdsrct';

const kbdsrcts: IKbdsrct[] = [];

export function findRegistered(kbdsrct: IKbdsrct) {
    for (const v of kbdsrcts) {
        const vcl = v.comb.length;

        if (vcl !== kbdsrct.comb.length) continue;

        let hasAll = true;

        for (let i = 0; i < vcl; i++) {
            const vc = v.comb[i];

            if (kbdsrct.comb.includes(vc)) continue;

            hasAll = false;
            break;
        }

        if (!hasAll) continue;

        return v;
    }
}

export function registerKbdsrct(kbdsrct: IKbdsrct) {
    if (!kbdsrct.comb.length) throw new Error("Shortcut key can't be empty");

    // warn if the same shortcut key already registered
    const dup = findRegistered(kbdsrct);
    if (dup) {
        console.warn(
            `Shortcut with key combination '${kbdsrct.comb.join(
                '+',
            )}' already registered with ${
                dup.cb === kbdsrct.cb ? 'the same' : 'different'
            } callback`,
        );
    }

    kbdsrcts.push(kbdsrct);
}

/**
 * Returns true if successfully unregistered
 */
export function unregisterKbdsrct(kbdsrct: IKbdsrct) {
    const rmIdx = kbdsrcts.findIndex((v) => v === kbdsrct);
    if (rmIdx < 0) return false;

    return kbdsrcts.splice(rmIdx, 1).length > 0;
}

/**
 * Check and execute appropriate callback based on current keypresses
 * Returns true when shortcut that matches keypresses combination exists
 */
export function execKbdsrct(keypresses: string[]) {
    if (!keypresses.length) return false;

    let hasSrct = false;

    for (const v of kbdsrcts) {
        let exec = true;
        for (const k of v.comb) {
            if (!keypresses.includes(k)) {
                exec = false;
                break;
            }
        }

        if (!exec) continue;

        v.cb();
        hasSrct = true;

        // remove executed keypresses
        for (const k of v.comb) {
            // keypresses guaranteed contains comb entries here
            // else smt is wrong w ur algorithm!
            const rmIdx = keypresses.findIndex((kp) => kp === k);
            keypresses.splice(rmIdx, 1);
        }
    }

    return hasSrct;
}

export function getAllShortcuts() {
    const allShortcuts: IShorcutGroup[] = [];

    for (const k of kbdsrcts) {
        if (k.hide) continue;

        const ref = allShortcuts.find((v) => v.category === k.category);

        if (!ref) {
            allShortcuts.push({
                category: k.category,
                shorcuts: [k],
            });

            continue;
        }

        ref.shorcuts.push(k);
    }

    return allShortcuts;
}

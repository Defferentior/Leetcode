def simulate(entries):
    """
    :param entries: (list(int)) The numerical record files
    :returns: (list(int)) The record files after running the malware
    """
    # Write your code here
    # Set numbers equal to or less than the entry 3 index before it to 0, and those equal or less than those
    # four index ahead to 0 as well. Set the numbers to 0 after figuring out which ones are are set to 0, not before

    erase = [False] * len(entries)

    for i, entry in enumerate(entries):
        if (i-3 >= 0):
            if entry <= entries[i-3]:
                erase[i] = True
        if (i+4 < len(entries)):
            if entry <= entries[i+4]:
                erase[i] = True
    for i, erase_flag in enumerate(erase):
        if erase_flag:
            entries[i] = 0

    return entries



    return [i for i in entries if i != 0]

records = [1, 2, 3, 5, 8, 10, 12, 9, 7, 0]
print(simulate(records))
# Expected output
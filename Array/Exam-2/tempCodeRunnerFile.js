 = i - 1;
    right = i + 1;

    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > max) {
        max = right - left + 1;
        result = str.substring(left, right + 1);
      }
      left--;
      right++;
    }


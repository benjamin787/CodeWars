def divisors(n)

    i = 2;
    a = [];

    while i < n
        if n % i == 0 
            a << i
        end
        i +=1
    end

    if a.length > 0
        a
    else
        "#{n} is prime"
    end

end
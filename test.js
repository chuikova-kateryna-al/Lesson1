const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};


function getCompany(compName) {

    if (company.name === compName) {
        result= console.log(company);
    } else {
        if (company.clients) {
            for (const client of company.clients) {
                if (compName === client.name) {
                    result = console.log(client);
                } else {
                    if (client.partners) {
                        for (const partner of client.partners) {
                            if (compName === partner.name) {
                                result = console.log(partner);
                            } else {
                                if (partner.partners) {
                                    for (const enyth of partner.partners) {
                                        if (compName === enyth.name)
                                            result = console.log(partner.partners)
                                    } 

                                } else {
                                    result = console.log ('No Company Found')
                                }

                            }
                        }

                    }

                }

            }
        }
    }
    return result;
}



getCompany('Клієнт 1.2.3')
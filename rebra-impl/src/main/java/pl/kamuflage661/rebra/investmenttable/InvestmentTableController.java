package pl.kamuflage661.rebra.investmenttable;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.math.BigDecimal;
import java.util.List;
import java.util.ArrayList;

@RestController
@CrossOrigin
public class InvestmentTableController {

    @RequestMapping("/investmenttable")
    public List<Investment> getInvestmentTable() {

        List<Investment> mockList = new ArrayList<>();
        Investment investment1 = new Investment();
        investment1.setId(1L);
        investment1.setName("KGHM");
        investment1.setQuantity(10);
        investment1.setBuyPrice(new BigDecimal("100.20"));
        investment1.setActualPrice(new BigDecimal("120.23"));
        investment1.setIncome(new BigDecimal("200.30"));
        investment1.setPercentage(new BigDecimal("119.99"));
        Investment investment2 = new Investment();
        investment2.setId(2L);
        investment2.setName("KGHM");
        investment2.setQuantity(4);
        investment2.setBuyPrice(new BigDecimal("340.20"));
        investment2.setActualPrice(new BigDecimal("120.23"));
        investment2.setIncome(new BigDecimal("-879.88"));
        investment2.setPercentage(new BigDecimal("35.34"));

        mockList.add(investment1);
        mockList.add(investment2);

        return mockList;
    }
}
//{ id: 1, name: 'KGHM' , quantity: 10, buyPrice: 100.20, actualPrice: 120.23, income:  200.30, percentage: 119.99},
//{ id: 2, name: 'KGHM' , quantity: 4, buyPrice: 340.20, actualPrice: 120.23, income: -879.88, percentage: 35.34}
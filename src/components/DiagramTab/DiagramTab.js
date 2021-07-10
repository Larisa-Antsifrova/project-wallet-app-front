import Chart from '../Chart';
import Table from '../Table';
import SelectMonthYear from '../SelectMonthYear';
import './DiagramTab.scss';

// Testing array
const tempData = [
  {
    name: 'Машина',
    sum: 40,
    income: false,
    color: '#6e78e8',
  },
  {
    name: 'Продукты',
    sum: 50,
    income: false,
    color: '#4a56e2',
  },
  {
    name: 'Забота о себе',
    sum: 60,
    income: false,
    color: '#81e1ff',
  },
  {
    name: 'Забота о детях',
    sum: 70,
    income: false,
    color: '#24cca7',
  },
  {
    name: 'Товары для дома',
    sum: 80,
    income: false,
    color: '#00ad84',
  },
  {
    name: 'Образование',
    sum: 90,
    income: false,
    color: '#c5baff',
  },
  {
    name: 'Досуг',
    sum: 100.323242342,
    income: false,
    color: '#fd9498',
  },
  {
    name: 'Другие расходы',
    sum: 110,
    income: false,
    color: '#ffd8d0',
  },
  {
    name: 'Основные расходы',
    sum: 150,
    income: false,
    color: '#fed057',
  },
];

const month = ['Март', 'Апрель', 'Май', 'Март', 'Апрель', 'Май'];
const year = [2020, 2021, 2023];

const totalBalance = 230000000000;

const DiagramTab = () => {
  return (
    <div className="diagramTab">
      <h2 className="diagramTabTitle">Статистика</h2>
      <div className="diagramTabChartTable">
        <Chart tempData={tempData} totalBalance={totalBalance} />
        <div className="tableContainer">
          <div className="dropdownContainer">
            <SelectMonthYear
              title={'Месяц'}
              list={month}
              onChange={itemTitle => console.log(itemTitle)}
            />
            <SelectMonthYear
              title={'Год'}
              list={year}
              onChange={itemTitle => console.log(itemTitle)}
            />
          </div>
          <div>
            <Table tempData={tempData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagramTab;
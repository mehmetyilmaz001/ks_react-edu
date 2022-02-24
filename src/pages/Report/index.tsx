import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Store } from "../../redux/store";

interface ReportProps {}

const Report: FunctionComponent<ReportProps> = () => {
  const list = useSelector((s: Store) => s.todo.list);
  return (
    <>
      <h1>Todo Report</h1>

      <table style={{ border: "solid 1px #ccc" }}>
        <thead>
          <tr>
            <th>Durumu</th>
            <th>Başlığı</th>
            <th>Oluşturma Tarihi</th>
          </tr>
        </thead>
        <tbody>
          {list.map((i) => (
            <tr key={i.date}>
              <td style={{backgroundColor: i.completed ? 'green' : 'transparent'}}> {i.completed ? 'Tamamlanmış' : 'Tamamlanmamış'}</td>
              <td>{i.title}</td>
              <td>{new Date(i.date).toLocaleString('tr-TR')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Report;

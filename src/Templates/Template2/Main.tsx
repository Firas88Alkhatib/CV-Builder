import { Page, Text, Document } from '@react-pdf/renderer'
const Main = ({ firstaName, lastName }: { firstaName: string; lastName: string }) => {
  return (
    <Document>
      <Page size="A4" wrap={true}>
        <Text>{firstaName}</Text>
        <Text>{lastName}</Text>
      </Page>
    </Document>
  )
}

export default Main

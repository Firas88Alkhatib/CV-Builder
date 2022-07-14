import { StyleSheet } from '@react-pdf/renderer'
export const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 35,
    paddingBottom: 30
  },
  section: {
    marginVertical: 10
  },
  infos: {
    flex: 70,
    backgroundColor: '#ffffff',
    fontSize: 12,
    paddingHorizontal: 35
  },
  head: {
    fontSize: 17,
    marginBottom: 5,
    fontWeight: 'bold'
  },

  description: {
    lineHeight: '1.3',
    marginLeft: 10,
    color: '#383838',
    textAlign: 'justify'
  },
  footer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    fontSize: 12,
    bottom: 0,
    left: 0,
    right: 0,
    height: 31
  },
  header: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    fontSize: 12,
    top: 0,
    left: 0,
    right: 0,
    height: 36
  }
})

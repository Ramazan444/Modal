import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Mark from '../../images/check.svg'
import './Folder.css'

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  


export default function Folder() {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Open dialog</Button>
            <Dialog  onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogContent>
        
            <div className="wrap">
                <p className="order">Добавить предложение к заказу</p>
                <div className="entire">
                    <p>Использовать шаблон</p>
                    <textarea className="area" placeholder="Здравствуйте! Я..."></textarea>
                    <div>
                        <label className="labelCheck">
                            <input className="check" style={{width: '20px', height: '20px'}} type="checkbox"/>
                            <span className="fakeCheck"></span>
                            <span className="first"> Оплата на банковскую карту через <span className="yellow">"Сделку без риска"</span></span>
                        </label>
                    </div>
                    <div>
                        <p className="cardText">Выберите карту для оплаты</p>
                        <input className="card"/>
                    </div>
                    <div>
                        <label className="labelCheckRow">
                            <input className="check" style={{width: '20px', height: '20px'}} type="checkbox"/>
                            <span className="fakeCheck"></span>
                            <span className="first">Уведомите меня, если исполнителем задания выберут другого</span>
                        </label>
                    </div>
                    <div>
                        <label className="labelCheckRow">
                            <input className="check" style={{width: '20px', height: '20px'}} type="checkbox"/>
                            <span className="fakeCheck"></span>
                            <span className="first">Указать время актуальности предложения</span>
                        </label>
                    </div>
                    <div className="line">
                        <hr></hr>
                    </div>
                    <div>
                        <label className="labelCheckRow">
                            <input className="check" style={{width: '20px', height: '20px'}} type="checkbox"/>
                            <span className="fakeCheck"></span>
                            <div className="devide">
                                <span className="first">Указать время актуальности предложения</span>
                                <span className="gray">Заказчики увидят, что вы застрахованы, и будут выбирать вас чаще. В случае ущерба <br></br> страховая компания выплатит за вас до 100 тыс.сомов</span>
                            </div>
                        </label>
                    </div>
                    <p style={{marginTop:'10px'}}>Стоимость вашей работы</p>
                    <p className="price">Заказчик указал стоимость - 1950 сом.</p>
                    <input className="lowPut" placeholder="5000 сом."/>
                </div>
            </div>
         
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleClose} className="send">Отправить</Button>
            </DialogActions>
            </Dialog>
        </div>
    )
}

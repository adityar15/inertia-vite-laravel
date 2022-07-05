<?php

namespace App\Helper;

class DetectColorFromImage
{
    public $imageFile;

    public function __construct($image)
    {
        $this->imageFile = $image;
    }

    public function detect()
    {
        $size = getimagesize($this->imageFile);

        $image = imagecreatefromstring(file_get_contents($this->imageFile));
        $colorSetSize = 5;
        $colorSet = $palette = [];
        
        for($i=0; $i<$size[0]; $i+=4)
        {
            for($j=0; $j<$size[1]; $j+=4)
            {
                $colorIndex = imagecolorat($image, $i, $j);
                $rgbColor = imagecolorsforindex($image, $colorIndex);

                $roundedRed = round(round($rgbColor['red'] / 0x33) * 0x33);
                $roundedGreen = round(round($rgbColor['green'] / 0x33) * 0x33);
                $roundedBlue = round(round($rgbColor['blue'] / 0x33) * 0x33);
                
                $hexColor = sprintf("%02X%02X%02X", $roundedRed, $roundedGreen, $roundedBlue);
                $palette[$hexColor] = isset($palette[$hexColor]) ? ++$palette[$hexColor] : 1;
            } 
        }

        arsort($palette);

        foreach($palette as $key=>$value)
        {
            if($colorSetSize == 0)
            {
                break;
            }
            array_push($colorSet, $key);
            $colorSetSize--; 
        }
        return $colorSet;
    }
}